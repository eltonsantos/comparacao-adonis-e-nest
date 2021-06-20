// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

  public async index() {
    return [
      {
        id: 1,
        username: 'Elton'
      }
    ]
  }

  public async show() {
    return {
      id: 1
    }
  }
}
