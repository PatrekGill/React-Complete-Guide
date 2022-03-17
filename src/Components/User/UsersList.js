const UsersList = (props) => {
	console.log(props.items);
	return (
		<div>
			{
				props.items.map((item) => (
					<div key={item.id}>
						{item.userName}
						{item.age}
					</div>
				))
			}
		</div>
	);
};

export default UsersList;