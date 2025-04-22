import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <Layout>
      <Header style={{ background: '#fff', textAlign: 'center' }}>
        <Link to="/">
          <Title level={2}>Explore countries</Title>
        </Link>
      </Header>
      <Content style={{ padding: '1rem 5%' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <CountryList />
              </>
            }
          />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </Content>
    </Layout>
  );
}
