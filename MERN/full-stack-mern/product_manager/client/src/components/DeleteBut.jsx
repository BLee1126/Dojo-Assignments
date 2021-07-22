import axios from 'axios';
import {navigate} from '@reach/router'

const DeleteButton = props => {
    const { removeFromDom } = props;
    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${props._id}`)
            .then(res => {removeFromDom(_id)})
            .then(navigate('/products'))
            .catch(err => console.log('something went wrong with deleting', err))
        }
    return(
        <> 
        <button onClick={deleteProduct}>Delete</button>
        </>
    );
}

export default DeleteButton;