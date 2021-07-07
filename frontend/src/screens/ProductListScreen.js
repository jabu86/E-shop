import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_REST } from "../constants/productConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Paginate from "../component/Paginate";
const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete, success } = productDelete;
  const productCreate = useSelector((state) => state.productCreate);
  const pageNumber = match.params.pageNumber || 1;
  const {
    loading: loadingCreate,
    success: successCreate,
    error: errorCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_REST });

    if (userInfo && userInfo.isAdmin) {
      if (successCreate) {
        history.push(`/admin/product/${createdProduct._id}/edit`);
      } else {
        dispatch(listProducts("", pageNumber));
      }
    } else {
      history.push("/login");
    }
  }, [
    dispatch,
    success,
    successCreate,
    createdProduct,
    pageNumber,
    history,
    userInfo,
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <div>
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Products</h1>
        </Col>
        <Col style={{ textAlign: "right" }} md={6}>
          <Button variant="dark" size="lg" onClick={createProductHandler}>
            <h6>
              <FontAwesomeIcon icon={faPlus} color="blue" /> Create Product
            </h6>
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td align="center">
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" size="sm" className="m-2">
                        <FontAwesomeIcon icon={faEdit} color="blue" />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      onClick={(e) => dispatch(deleteProduct(product._id))}
                      size="sm"
                      className="m-2"
                    >
                      <FontAwesomeIcon icon={faTrash} color="red" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
      <Paginate pages={pages} page={page} isAdmin={true} />
    </div>
  );
};

export default ProductListScreen;
