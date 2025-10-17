import { volunteers } from '../data/ngo'

export default function VolunteersPage() {
  return (
    <div>
      <h2>Volunteers</h2>
      <ul>
        {volunteers.map((v) => (
          <li key={v.name}><strong>{v.role}</strong>: {v.name}</li>
        ))}
      </ul>
    </div>
  )
}


