
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'
import View from '@ioc:Adonis/Core/View'
export default class StudentsController {

  public async index(){
    const allStudent = await Student.all();
    return View.render('student/index', {students:allStudent })

  }

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
