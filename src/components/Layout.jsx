import { useContext } from 'react'
import { Logout } from '../utils/functions'
import { store } from '../utils/store'


const Layout=({children})=> {

    const {state:{user}}=useContext(store)

    const username=user?.UserName? user.UserName:"Dummy Username"
    const firstname=user?.FirstName? user.FirstName:"Dummmy"
    const lastname=user?.LastName? user.LastName:"name"
    const name=firstname+" "+lastname
    const email=user?.Email? user.Email:"Dummy@email.com"
    const contact=user?.PhoneNumber? user.PhoneNumber:"dummycontact"
    const role=user?.Role? user.Role:"dummyRole"

  return (
    <div className='layout'>
        <div className='header'>
            <div className="brand">
                HireHub
            </div>
            <div className="rightNav">
                <div className="Avatar">
                    <div className="text">{role}</div>
                </div>
                <ul className='sideBar'>
                </ul>
                <div className='rightItem'>
                    <div className='logoutButton' onClick={Logout}>
                        <div className="text">Logout</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bodyHolder">
            <div className='leftSideBar'>
                <div class="profile-card">
	<div className="profile-card-header">
		<div className="profile-image">
            <img style={{width:'100%', borderRadius:'10%' }} src={`https://api.dicebear.com/6.x/pixel-art/jpg?seed=${username}&backgroundColor=ffdfbf`} alt="user"/>
        </div>

		<div className="profile-info">
			<p className="profile-name">{name}</p>
		</div>
	</div>

	<div className="profile-card-body">
		<div className="status">
        <li>
				<span className="status-value">Username: </span>
				<span className="status-text">{username}</span>
			</li>
			<li>
				<span className="status-value">Email: </span>
				<span className="status-text">{email}</span>
			</li>

			<li>
				<span className="status-value">Contact: </span>
				<span className="status-text">{contact}</span>
			</li>
		</div>
	</div>
</div>
            </div>
            <div className='mainContent'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout
