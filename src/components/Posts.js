import React from 'react';
import { List, Typography, Spin } from 'antd';

const { Title } = Typography;

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <List
      className="posts-list"
      bordered
      dataSource={posts}
      renderItem={post => (
        <List.Item>
          <Title level={5}>{post.title}</Title>
        </List.Item>
      )}
      
      style={{ marginBottom: '20px', marginTop: '30px'}}
    />
  );
};

export default Posts;
