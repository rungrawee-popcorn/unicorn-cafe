import { menuList } from '../data/menu'

const Menu = () => {
  return (
    <div style={{ padding: '16px' }}>
      <h1>Menu</h1>

      <ul>
        {menuList.map((food) => (
          <li key={food.id} style={{ marginBottom: '8px' }}>
            🍽️ {food.name} - {food.price} บาท
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu