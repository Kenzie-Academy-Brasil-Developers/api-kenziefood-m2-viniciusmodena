class Api {

    static baseUrl = 'https://kenzie-food-api.herokuapp.com'

    static async registerUser (user) {
        const response = await fetch(`${this.baseUrl}/auth/register`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user)
        })
            .then(response => {
                console.log(response)
                return response
            }) 
            .catch(err => console.error(err))
        
        return response
    }

    static async userLogin (user) {
        const response = await fetch(`${this.baseUrl}/auth/login`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user)
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => data)
            .catch(err => console.error(err))
        
        return response

    }

    static async getProducts () {
        const response = await fetch(`${this.baseUrl}/products`)
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.error(err))

        return response
    }

    static async getMyProducts (token) {
        const response = await fetch(`${this.baseUrl}/my/products`, { headers : {Authorization: `Bearer ${token}`}} )
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => data)
            .catch(err => console.error(err))
        
        return response
    }

    static async addMyProduct (product, token) {
        const response = await fetch(`${this.baseUrl}/my/products`, {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(product)
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => data)
            .catch(err => console.error(err))
        
        return response
    }

    static async editProduct (productId,productChanges, token) {
        const response = await fetch(`${this.baseUrl}/my/products/${productId}`, {
            "method": "PATCH",
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(productChanges)
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => data)
            .catch(err => console.error(err))
        
        return response
    }

    static async deleteProduct (productId, token) {
        const response = await fetch(`${this.baseUrl}/my/products/${productId}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => console.log(response))
            .catch(err => console.error(err))

        return response
    }

    // Métodos extras

    static async getCart (token) {
        const response = await fetch(`${this.baseUrl}/cart`, { headers : {Authorization: `Bearer ${token}`}} )
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => data)
            .catch(err => console.error(err))
        
        return response
    }

    static async addProductToCart(productInfo, token) {
        const response = await fetch(`${this.baseUrl}/cart/add`, {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(productInfo)
        })
            .then(response => {
                return response
            })
            .catch(err => console.error(err))
        
        return response
    }

    static async deleteProductFromCart (productId, token) {
        const response = await fetch(`${this.baseUrl}/cart/remove/${productId}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => console.log(response))
            .catch(err => console.error(err))

        return response
    }
}

export { Api }