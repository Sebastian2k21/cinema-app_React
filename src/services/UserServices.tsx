const getUsers = () => {
    const usersStr = localStorage.getItem('users');
    if(usersStr == null) {
        return [];
    } else {
        return JSON.parse(usersStr);
    }
}

const saveUsers = (users: []) => {
    localStorage.setItem('users', JSON.stringify(users));
}

export const addUser = (user: {username: string, password: string}) => {
    const users = getUsers();
    users.push(user);
    saveUsers(users);
}

export const getUser = (username: string) => {
    const users = getUsers();
    return users.find((user: {username: string, password: string}) => user.username === username);
}
