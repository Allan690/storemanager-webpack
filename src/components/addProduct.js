import React , {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {toast} from 'react-toastify'
import {addProduct} from '../actions/actionCreators/addProduct.action'

class AddProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            prod_name: '',
            prod_price: '',
            prod_quantity: 0,
            prod_category: '',
            prod_description: '',
            minimum_allowed: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            nextProps.history.push('/allProducts')
        }
    }

    onSubmit = e => {
        e.preventDefault();
        for(let key in this.state){
            if(key == null || key === '' ){
                toast.error(key + 'Cannot be left null!');
                return;
            }
        }
        const data = {
            prod_name: this.state.prod_name,
            prod_price: parseInt(this.state.prod_price, 10),
            prod_quantity: parseInt(this.state.prod_quantity, 10),
            prod_category: this.state.prod_category,
            prod_description: this.state.prod_description,
            minimum_allowed: parseInt(this.state.minimum_allowed, 10)
        };
        this.props.addProduct(data)
    };


    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    render() {
        return(
            <div className="addProductForm">
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                           className="addProduct"
                           onChange={this.onChange}
                           id="prod_name"
                           placeholder="Product Name"
                           required
                    />
                    <input type="text"
                           className="addProduct"
                           onChange={this.onChange}
                           id="prod_price"
                           placeholder="Product Price"
                           required
                    />
                    <input type="text"
                    className="addProduct"
                    onChange={this.onChange}
                    id="prod_quantity"
                    placeholder="product quantity"
                    required
                    />
                    <input type="text"
                    className="addProduct"
                    onChange={this.onChange}
                    id="prod_category"
                    placeholder="Product Category"
                    required
                    />
                    <input type="text"
                           className="addProduct"
                           onChange={this.onChange}
                           id="prod_description"
                           placeholder="Product description"
                           required
                    />
                    <input type="text"
                           className="addProduct"
                           onChange={this.onChange}
                           id="minimum_allowed"
                           placeholder="minimum allowed"
                           required
                    />
                    <button>Add Product</button>
                </form>
            </div>
        )
    }
}

AddProduct.propTypes = {
    addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {addProduct})(AddProduct)
