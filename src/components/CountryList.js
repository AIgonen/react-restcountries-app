import React, { useEffect, useState } from 'react';
import { List, Card, Pagination, Spin, Alert } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = name
      ? `https://restcountries.com/v3.1/name/${name}`
      : 'https://restcountries.com/v3.1/all';

    axios.get(url)
      .then((res) => setCountries(res.data))
      .catch((err) => {
        if (err.response?.status === 404) {
          setCountries([]);
        } else {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));
  }, [name]);

  const start = (page - 1) * pageSize;
  const pageData = countries.slice(start, start + pageSize);

  const onChangePage = (p) => {
    setSearchParams({ ...(name && { name }), page: p });
  };

  if (loading) return <Spin tip="Loading countries..." />;
  if (error) return <Alert message="Error" description={error} type="error" showIcon />;
  if (!loading && countries.length === 0 && name) {
    return <Alert message="No countries found" type="info" showIcon />;
  }

  return (
    <>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={pageData}
        renderItem={(country) => (
          <List.Item>
            <Card title={country.name.common} cover={<img alt="flag" src={country.flags.svg} />}>               
              <p>Capital: {country.capital?.[0] || 'N/A'}</p>
              <p>Region: {country.region}</p>
              <Link to={`/country/${country.cca3}`}>View details...</Link>
            </Card>
          </List.Item>
        )}
      />
      <Pagination
        current={page}
        pageSize={pageSize}
        total={countries.length}
        onChange={onChangePage}
        style={{ textAlign: 'center', marginTop: '1rem' }}
      />
    </>
  );
}