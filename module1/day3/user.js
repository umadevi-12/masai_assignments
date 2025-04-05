function generateMessage(user) {
    if (user.role === 'admin') {
        if (user.active) {
            console.log('Admin Access Granted!');
        } else {
            console.log('Admin Access Revoked');
        }
    } else if (user.role === 'user') {
        if (user.active) {
            console.log('User Access Granted!');
        } else {
            console.log('User Access Revoked');
        }
    } else {
        console.log('Access Denied');
    }
}

// Example usage:
let user1 = { name: "Alice", role: "admin", active: false };
generateMessage(user1); // Output: "Admin Access Revoked"

let user2 = { name: "Bob", role: "user", active: true };
generateMessage(user2); // Output: "User Access Granted!"
    