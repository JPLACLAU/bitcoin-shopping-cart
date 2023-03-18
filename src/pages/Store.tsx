import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';
import MetaData from './MetaData';

export function Store() {
  return (
    <>
      <MetaData title="Store" />
      <h1>Store</h1>
      <h3>All prices are in Satoshis</h3>
      <h5>All items come in packs of 5x units.</h5>

      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
