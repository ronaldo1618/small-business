const api = {
    getData() {
        return fetch(`http://localhost:3000/employees?_expand=department&_expand=computer`)
        .then(res => res.json())
    }
}

export default api;