import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { useSearchParams } from 'react-router-dom';

const { Search } = Input;

export default function SearchBar() {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const onSearch = (query) => {
    if (query) setSearchParams({ name: query, page: 1 });
    else setSearchParams({});
  };

  return (
    <Space style={{ marginBottom: '1rem' }}>
      <Search
        placeholder="Search countries"
        enterButton="Search"
        size="large"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={onSearch}
      />
    </Space>
  );
}
