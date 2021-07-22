import axios from 'axios';
import {navigate} from '@reach/router'

const DeleteButton = props => {
    const { removeFromDom } = props;
    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${props._id}`)
            .then(res => {removeFromDom(_id)})
            .then(navigate('/'))
            .catch(err => console.log('something went wrong with deleting', err))
        }
    return(
        <> 
        <button className = 'btn-danger'onClick={deleteProduct}>Delete</button>
        </>
    );
}

export default DeleteButton;