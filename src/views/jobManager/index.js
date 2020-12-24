import { Table, Button,Popover,Input,Form,Modal,Select ,Space,Popconfirm, message} from 'antd';
import React from 'react'
import { PlusOutlined ,SearchOutlined } from '@ant-design/icons';
import './index.css'
// import AddUpdateDialog from './components/addUpdateDialog'

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    index: i+1,
    jobName: `Edward King ${i}`,
    jobType: 32,
    salary: '7-15K',
    workplace: '上海',
    education: '本科及以上',
    responsibility: `1、 负责法律文件的审核、起草工作；
    2、 负责相关协议、合同等的核对、用印、归档及管理工作；
    3、 协助处理公司各类法律事务、法律风险规避等工作；
    4、 协助配合初步的法律研究；
    5、 完成领导安排的其他工作任务。`,
    address: `fdsdasf fafgsgfsgsgs
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
      layout:{
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      },
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible: false,
      confirmLoading:false,
      title: '添加岗位',
      pagination: {
        pageSizeOptions: [10,20,50,100],
        // total:data.length,
        // showSizeChanger: true
        showTotal:(total)=>`共${total}条`,
        onChange:(page, pageSize)=>{
          console.log(page,pageSize)
        },
        onShowSizeChange:(current,pageSize)=>{

        }
      },
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          width: 64
        },
        {
          title: '岗位名称',
          dataIndex: 'jobName',
          width: 160
        },
        {
          title: '岗位类型',
          dataIndex: 'jobType',
          width: 100,
        },
        {
          title: '工作地点',
          dataIndex: 'workplace',
          width:100
        },
        {
          title: '学历要求',
          dataIndex: 'education ',
          width:100
        },
        {
          title: '薪资',
          dataIndex: 'salary',
          width: 100,
        },
        {
          title: '工作经验',
          width:150,
          dataIndex: 'workExperience'
        },
        {
          title: '岗位职责',
          dataIndex: 'responsibility',
          width: 200,
          render:(responsibility)=> (<Popover content={<p style={{width:'500px'}}>{responsibility}</p>} title="岗位职责" trigger="hover" >
              <div  className="newline-hidden">{responsibility}</div>
          </Popover>)
        },
        {
          title: '岗位要求',
          dataIndex: 'address',
          width:200,
          render:(address)=> (<Popover content={<p style={{width:'500px'}}>{address}</p>} title="address" trigger="hover" >
              <div  className="newline-hidden">{address}</div>
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
                    {record.status&&<Button size="small" type="primary" danger>撤销发布</Button>}
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
  
   editHandle = (record)=>{
    console.log('this',this)
    console.log('row',record)
    this.setState({
      title: '编辑岗位',
      visible : true
    },()=>{
      
      console.log('this',this)
     
      setTimeout(()=>{
        this.formRef.current.setFieldsValue(record)
      },200)
     
    })
    
    // const promise1 = new Promise((resolve, reject)=> 
    //   this.setState({title: '编辑岗位',visible : true}, resolve)
    // )
    // promise1.then(()=>{
    //   console.log('this',this)
    //   setTimeout(()=>{
    //     this.formRef.current.setFieldsValue(record)
    //   },100)
    // })
  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  confirmDelete = (record)=>{
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
    this.setState({confirmLoading:true})
    setTimeout(() => {
      this.setState({visible:false})
      this.setState({confirmLoading:false})
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({visible:false})
  };


  render() {
    const { loading, selectedRowKeys ,columns,confirmLoading,layout,visible,title,pagination} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <>
        <div className="topWrapper">
            <div>
              <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                Reload
              </Button>
              <Select defaultValue={1} style={{ width: 160,marginRight:20 }}>
                <Select.Option value={1}>已发布</Select.Option>
                <Select.Option value={0}>未发布</Select.Option>
              </Select>
              <Button type="primary">
               <span>搜索<SearchOutlined /></span>
              </Button>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </div>  
            <div>
              <Button type="primary" className="common-button">部分发布</Button>
              <Button type="primary" className="common-button">一键发布</Button>
              <Button type="primary"  className="common-button" onClick={this.addHandle}>< PlusOutlined />添加</Button>
            </div>
        </div>
        <Table rowSelection={rowSelection} columns={columns} pagination={pagination} dataSource={data} scroll={{ x: 1200 }}/>
        <Modal
          destroyOnClose
          centered
          maskClosable={false}
          title={title}
          visible={visible}
          onOk={this.handleOk}
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
              name="jobName"
              rules={[{ required: true, message: '请输入岗位名称' }]}
            >
              <Input allowClear/>
            </Form.Item>

            <Form.Item
              label="岗位类型"
              name="jobType"
              rules={[{ required: true, message: '请选择岗位类型' }]}
            >
              <Select allowClear>
                <Select.Option value="社会招聘">社会招聘</Select.Option>
                <Select.Option value="校园招聘">校园招聘</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="工作地点"
              name="workplace"
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
              rules={[{ required: true, message: '请选择工作经验' }]}
            >
              <Select allowClear>
                <Select.Option value="1">1年工作经验</Select.Option>
                <Select.Option value="2">2年工作经验</Select.Option>
                <Select.Option value="3">3年工作经验</Select.Option>
                <Select.Option value="4">4年工作经验</Select.Option>
                <Select.Option value="5">5年工作经验</Select.Option>
                <Select.Option value="6">6年工作经验</Select.Option>
                <Select.Option value="7">7年工作经验</Select.Option>
                <Select.Option value="8">8年工作经验</Select.Option>
                <Select.Option value="9">9年工作经验</Select.Option>
                <Select.Option value="10">10年工作经验</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="学历要求"
              name="education"
              rules={[{ required: true, message: '请选择学历要求' }]}
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
              name="salary"
              rules={[{ required: true, message: '请输入薪资范围' }]}
            >
              <Input allowClear/>
            </Form.Item>
            <Form.Item
              label="岗位职责"
              name="responsibility"
              rules={[{ required: true, message: '请输入岗位职责' }]}
            >
              <Input.TextArea allowClear autoSize={{minRows:3}} />
              
            </Form.Item>
            <Form.Item
              label="岗位要求"
              name="address"
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
