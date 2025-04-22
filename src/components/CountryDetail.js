import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Descriptions, Spin, Alert, Button } from 'antd';
import axios from 'axios';

export default function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [code]);

  if (loading) return <Spin tip="Loading country details..." />;
  if (error)   return <Alert message="Error" description={error} type="error" showIcon />;
  if (!country) return null;

  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';
  const currencies = country.currencies
    ? Object.values(country.currencies).map(c => c.name).join(', ')
    : 'N/A';

  return (
    <Card
      title={country.name.common}
      cover={
        <img
          alt="flag"
          src={country.flags.svg}
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      }
      extra={<Button><Link to="/">Back</Link></Button>}
      style={{ maxWidth: 800, margin: '0 auto' }}
    >
      <Descriptions column={1} bordered>
        <Descriptions.Item label="Official name">
          {country.name.official}
        </Descriptions.Item>
        <Descriptions.Item label="Capital">
          {country.capital?.[0] || 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label="Population">
          {country.population.toLocaleString()}
        </Descriptions.Item>
        <Descriptions.Item label="Area">
          {country.area.toLocaleString()} km²
        </Descriptions.Item>
        <Descriptions.Item label="Region">
          {country.region}
        </Descriptions.Item>
        <Descriptions.Item label="Subregion">
          {country.subregion}
        </Descriptions.Item>
        <Descriptions.Item label="Languages">
          {languages}
        </Descriptions.Item>
        <Descriptions.Item label="Currency">
          {currencies}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
