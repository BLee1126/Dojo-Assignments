import React from 'react'
import {Link} from '@reach/router'
import DeleteButton from './DeleteButton';

const AuthorList = props => {
    const { removeFromDom } = props;
    return (
        <div>
            <table className='thead-dark  table-bordered table-primary' style={{margin: '0 auto', border: 'black 1px solid'}}>
                <thead>
                    <th>Author</th>
                    <th>Actions Available</th>
                </thead>
                {props.authors.map((author, i)=>{
                return (
                <tr>
                    <td>{author.firstName} {author.lastName}</td>
                    <td>
                        <Link to= {`/authors/edit/${author._id}`}><button className='btn-primary'>Edit</button></Link>
                        <DeleteButton removeFromDom = {removeFromDom} _id = {author._id}/>
                    </td>
                </tr>)
                })}
            </table>
        </div>
    )
}




export default AuthorList;
