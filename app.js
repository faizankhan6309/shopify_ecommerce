openapi: 3.0.0
info:
  title: E-commerce Admin API
  version: 1.0.0
  description: API for managing admin functionalities in an e-commerce website

paths:
  /admin/login:
    post:
      summary: Admin login
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                username:
                  type: string
                  example: admin_user
                password:
                  type: string
                  example: admin_password