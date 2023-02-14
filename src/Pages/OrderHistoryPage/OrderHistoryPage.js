import { checkToken } from '../../Utilities/users-service'

export default function OrderHistoryPage() {
  function handleCheckToken() {
    checkToken().then(alert)
  }
  return (
    <>
      <h2>Order History Page</h2>
      <button onClick={handleCheckToken}>check when login expires</button>
    </>
  )
}
