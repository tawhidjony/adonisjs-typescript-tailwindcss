
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'

export default class StudentsController {



 public async store({request, response}:HttpContextContract){
  const req = await request.all()
  const student = new Student()
        student.name = req.name
        student.email = req.name
        student.phone = req.name
        student.address = req.address

        await student.save()

        return response.redirect('/student')

 }



}
