import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem'

const TransactionHistory = ({items}) => {
    return  ( 
<div>
    <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        {items.map(item =>(
            <tbody key = {item.id}>

        <TransactionItem 
            type={item.type} 
            amount={item.amount} 
            currency={item.currency}/>

            </tbody>
                
        ))}

        
    </table> 
</div>
    )
}
export default TransactionHistory; 