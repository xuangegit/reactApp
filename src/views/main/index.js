import { Table, Button,Popover } from 'antd';
import React from 'react'

const myStyle = {
    width: '100px',
    display: '-webkitBox',
    webkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    webkitBoxOrient: 'vertical'
  }
  const style1 = {
    width: '100px',
    overflow: 'hidden',
    textOverflow:'ellipsis',
    whiteSpace: 'nowrap'
  }
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render:(address)=> (<Popover content={address} title="address" trigger="hover">
      <div style={style1}>{address}</div>
  </Popover>)
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `fdsdasf fafgsgfsgsgs
    gsfgsfg
    gsfgsg
    gsfgsdfgsdfgsgjesrjfldsfjls
    gsfgsgsdfgsdfgjpoewirafladfladjfadsjfl
    faffadfasdfasjkflnnadfadafasf
     f sfa af afa fasdf sf asfasfasfda sfLondon, Park Lane no. ${i}`,
  });
}

export default class Main extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

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

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}
