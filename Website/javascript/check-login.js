function validateToken() {
    const token = localStorage.getItem('token');
    if (!token || isTokenExpired(token)) {
        window.location.href = './login.html';
    }
}

function isTokenExpired(token) {
    const decodedToken = decodeToken(token);
    const expirationDate = new Date(decodedToken.exp * 1000); 
    const currentDate = new Date();
    return expirationDate < currentDate;
}

validateToken();

