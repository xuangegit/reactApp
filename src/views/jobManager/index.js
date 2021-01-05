import { Table, Button,Popover,Input,Form,Modal,Select ,Space,Popconfirm, message} from 'antd';
import React from 'react'
import { PlusOutlined ,SearchOutlined } from '@ant-design/icons';
import './index.css'
import {getPositionList,positionInsert,positionUpdate} from '../../services'
// import AddUpdateDialog from './components/addUpdateDialog'

const data = [];
for(let i = 0; i < 46; i++) {
  data.push({
    key: i,
    index: i+1,
    name: `Edward King ${i}`,
    type: 32,
    salaryRange: '7-15K',
    workPlace: '上海',
    educationRequirements: '本科及以上',
    responsibilities: `1、 负责法律文件的审核、起草工作；
    2、 负责相关协议、合同等的核对、用印、归档及管理工作；
    3、 协助处理公司各类法律事务、法律风险规避等工作；
    4、 协助配合初步的法律研究；
    5、 完成领导安排的其他工作任务。`,
    jobRequirements: `fdsdasf fafgsgfsgsgs
    gsfgsfg
    gsfgsg
    gsfgsdfgsdfgsgjesrjfldsfjls
    gsfgsgsdfgsdfgjpoewirafladfladjfadsjfl
    faffadfasdfasjkflnnadfadafasf
     f sfa af afa fasdf sf asfasfasfda sfLondon, Park Lane no. ${i}` ,
     status:(i%2)===0
  });
}

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      selectValue: 1,
      layout:{
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      },
      selectedRowKeys: [], // Check here to configure the default column
      visible: false,
      confirmLoading:false,
      title: '添加岗位',
      tableData: data,
      pagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: [10,20,50,100],
        // total:data.length,
        // showSizeChanger: true,
        responsive: true,
        showTotal:(total)=>`共${total}条`,
        onChange:(page, pageSize)=>{
          console.log(page,pageSize)
          this.setState(prevState => ({ 
              // tableData:dataArray,
              pagination: { 
                ...prevState.pagination, 
                current: page
              } 
          }),()=>{
            this.getTableData()
          }) 
          
        },
        total: 0,
        onShowSizeChange:(current,pageSize)=>{
          console.log(current,pageSize)
          this.setState(prevState => ({ 
              pagination: { 
                ...prevState.pagination, 
                pageSize:  pageSize,
                current:current
              } 
          })) 
        }
      },
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          width: 64,
          fixed: 'left',
        },
        {
          title: '岗位名称',
          dataIndex: 'name',
          width: 160,
         
        },
        {
          title: '岗位类型',
          dataIndex: 'type',
          width: 100,
        },
        {
          title: '工作地点',
          dataIndex: 'workPlace',
          width:100
        },
        {
          title: '学历要求',
          dataIndex: 'educationRequirements',
          width:100
        },
        {
          title: '薪资',
          dataIndex: 'salaryRange',
          width: 100,
        },
        {
          title: '工作经验',
          width:150,
          dataIndex: 'workExperience'
        },
        {
          title: '岗位职责',
          dataIndex: 'responsibilities',
          width: 200,
          render:(responsibilities)=> (<Popover content={<p style={{width:'500px'}}>{responsibilities}</p>} title="岗位职责" trigger="hover" >
              <div  className="newline-hidden">{responsibilities}</div>
          </Popover>)
        },
        {
          title: '岗位要求',
          dataIndex: 'jobRequirements',
          width:200,
          render:(jobRequirements)=> (<Popover content={<p style={{width:'500px'}}>{jobRequirements}</p>} title="岗位要求" trigger="hover" >
              <div  className="newline-hidden">{jobRequirements}</div>
          </Popover>)
        },
        {
          title: '状态',
          dataIndex: 'status',
          width: 100,
          render:(status)=>(
            <p>{status?'已发布': '未发布'}</p>
          )
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 200,
          render: (text, record) => {
            return <Space>
                  <Button size="small" onClick={this.editHandle.bind(this,record)}>编辑</Button>
                  <Popconfirm
                    placement="topLeft"
                    title="确认撤销本条岗位发布?"
                    onConfirm={this.confirmDelete.bind(this,record)}
                    onCancel={this.cancelDelete.bind(this,record)}
                    okText="确认"
                    cancelText="取消"
                  >
                    {record.status?<Button size="small" type="primary" danger>撤销发布</Button>:''}
                  </Popconfirm>
                  <Popconfirm
                    placement="topLeft"
                    title="确认删除本条岗位?"
                    onConfirm={this.confirmDelete.bind(this,record)}
                    onCancel={this.cancelDelete.bind(this,record)}
                    okText="确认"
                    cancelText="取消"
                  >
                    <Button size="small" type="primary" danger>删除</Button>
                  </Popconfirm>
                </Space>
          }
            
          ,
        },
      ],
    };
    
  }
  componentWillMount() {
    // alert("componentWillMount");
    this.getTableData()
  }
  handleChange = (value)=>{
    this.setState({
      selectValue:value
    })
  }
  searchFn = () =>{
    // this.setState()
    this.getTableData()
  }
  getTableData = ()=> {
    let {pagination,selectValue} = this.state
    let serchParams= {page:pagination.current,size:pagination.pageSize,status:selectValue}
    getPositionList(serchParams).then(d=>{
      console.log('列表',d.data)
      const dataArray = []
       d.data.forEach((item,i) =>{
        item.index = i+1
        item.key = i
        dataArray.push(item)
      })
      this.setState(prevState => ({ 
          tableData:dataArray,
          pagination: { 
          ...prevState.pagination, 
          total: d.total
          } 
      })) 
    })
  }
  editHandle = (record)=>{
    console.log('this',this)
    console.log('row',record)
    this.setState({
      title: '编辑岗位',
      visible : true,
      currentId: record.id
    },()=>{
      
      console.log('this',this)
     
      setTimeout(()=>{
        this.formRef.current.setFieldsValue(record)
      },200)
     
    })
    
  }
  start = () => {
    // this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        // loading: false,
      });
    }, 1000);
  };
  confirmDelete = (record)=>{
    this.setState({currentId:record.id},()=>{
      console.log('id',this.state.currentId)
    })
    message.success('已经删除');
    console.log('行数据--row',record)
  }
  cancelDelete = (record)=>{
    console.log('行数据--row',record)
    message.success('已取消删除');
  }
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  addHandle = ()=>{
    // alert(1)
    this.setState({
      visible:true,
      title: '添加岗位'
    },()=>{
      console.log('visible',this.state.visible)
    })
    
  }
  showModal = () => {
    this.setState({visible:true})
  };
  handleOk = () => {
    console.log('currentId',this.state.currentId)
    // this.setState({confirmLoading:true})
    console.log('this.formRef.current',this.formRef.current)
    this.formRef.current.validateFields().then(values=>{
      let params = {...values}
      params.id = this.state.currentId
      console.log('校验通过',values)
      console.log('校验通过--params',params)
      if(this.state.title ==='添加岗位')
        return  positionInsert(params)
      else  
        return  positionUpdate(params)    
    })
    .then(d=>{
        //添加编辑接口通过相关逻辑
      this.setState({visible:false,confirmLoading:false}) 
      this.getTableData() //刷新列表
    }).catch(e=>{
      this.setState({confirmLoading:false})
    })
    
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({visible:false})
  };


  render() {
    const {  tableData, selectedRowKeys ,columns,confirmLoading,layout,visible,title,pagination} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    // const hasSelected = selectedRowKeys.length > 0;
    return (
      <>
        <div className="topWrapper">
            <div >
              {/*
              <Select defaultValue={1} style={{ width: 160,marginRight:20 }}>
                <Select.Option value={1}>已发布</Select.Option>
                <Select.Option value={0}>未发布</Select.Option>
              </Select>
              <Button type="primary" onClick={this.getTableData.bind(this)}>
               <span>搜索<SearchOutlined /></span>
              </Button>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span> */}
              <Form layout="inline">
                <Form.Item>
                  <Select  value={this.state.selectValue} 
                    onChange={this.handleChange.bind(this)} 
                    style={{ width: 160,marginRight:20 }}>
                    <Select.Option value={1} >全部</Select.Option>
                    <Select.Option value={2}>已发布</Select.Option>
                    <Select.Option value={3}>未发布</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary"  htmlType="submit" onClick={this.searchFn.bind(this)}>
                    <span>搜索<SearchOutlined /></span>
                  </Button>
                </Form.Item>
              </Form>
            </div>  
            <div>
              <Button type="primary" className="common-button">部分发布</Button>
              <Button type="primary" className="common-button">一键发布</Button>
              <Button type="primary"  className="common-button" onClick={this.addHandle}>< PlusOutlined />添加</Button>
            </div>
        </div>
        <Table rowSelection={rowSelection} columns={columns} pagination={pagination} dataSource={tableData} scroll={{ x: 1200 }}/>
        <Modal
          destroyOnClose
          centered
          maskClosable={false}
          title={title}
          visible={visible}
          onOk={this.handleOk.bind(this)}
          okText="确认"
          cancelText="取消"
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form
            {...layout}
            name="basic"
            ref={this.formRef}
            // initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="岗位名称"
              name="name"
              rules={[{ required: true, message: '请输入岗位名称' }]}
            >
              <Input allowClear/>
            </Form.Item>

            <Form.Item
              label="岗位类型"
              name="type"
              rules={[{ required: true, message: '请选择岗位类型' }]}
            >
              <Select allowClear>
                <Select.Option value="社会招聘">社会招聘</Select.Option>
                <Select.Option value="校园招聘">校园招聘</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="工作地点"
              name="workPlace"
              rules={[{ required: true, message: '请选择工作地点' }]}
            >
              <Select allowClear>
                <Select.Option value="上海市">上海市</Select.Option>
                <Select.Option value="宁波市">宁波市</Select.Option>
                <Select.Option value="杭州市">杭州市</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="工作经验"
              name="workExperience"
              // rules={[{ required: true, message: '请选择工作经验' }]}
            >
              <Select allowClear>
                <Select.Option value="1年工作经验">1年工作经验</Select.Option>
                <Select.Option value="2年工作经验">2年工作经验</Select.Option>
                <Select.Option value="3年工作经验">3年工作经验</Select.Option>
                <Select.Option value="4年工作经验">4年工作经验</Select.Option>
                <Select.Option value="5年工作经验">5年工作经验</Select.Option>
                <Select.Option value="6年工作经验">6年工作经验</Select.Option>
                <Select.Option value="7年工作经验">7年工作经验</Select.Option>
                <Select.Option value="8年工作经验">8年工作经验</Select.Option>
                <Select.Option value="9年工作经验">9年工作经验</Select.Option>
                <Select.Option value="10年工作经验">10年工作经验</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="学历要求"
              name="educationRequirements"
              // rules={[{ required: true, message: '请选择学历要求' }]}
            >
              <Select allowClear>
                <Select.Option value="博士">博士</Select.Option>
                <Select.Option value="硕士">硕士</Select.Option>
                <Select.Option value="本科">本科</Select.Option>
                <Select.Option value="大专">大专</Select.Option>
                <Select.Option value="高中">高中</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="薪资范围"
              name="salaryRange"
              // rules={[{ required: true, message: '请输入薪资范围' }]}
            >
              <Input allowClear/>
            </Form.Item>
            <Form.Item
              label="岗位职责"
              name="responsibilities"
              rules={[{ required: true, message: '请输入岗位职责' }]}
            >
              <Input.TextArea allowClear autoSize={{minRows:3}} />
              
            </Form.Item>
            <Form.Item
              label="岗位要求"
              name="jobRequirements"
              rules={[{ required: true, message: '请输入岗位要求' }]}
            >
              <Input.TextArea autoSize={{minRows:3}} allowClear/>
              
            </Form.Item>
          </Form>
        </Modal>
        {/* <AddUpdateDialog visible={this.state.visible}></AddUpdateDialog> */}
      </>
    );
  }
}
