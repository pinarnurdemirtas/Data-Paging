import React from 'react';
import { Pagination as AntPagination } from 'antd';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const handlePageChange = (page) => {
    paginate(page);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <AntPagination
        defaultCurrent={1}
        total={totalPosts}
        pageSize={postsPerPage}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Pagination;
