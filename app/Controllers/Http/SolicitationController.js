'use strict'

const SolicitationModel = use('App/Models/Solicitation')

class SolicitationController {

/**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    index({request, response, view}){
        return response.send({"fulfillmentText": "Primeiro Webhook"})
    }

    async store ({request, response}){
        const data=request.all()
        const Solicitation = await SolicitationModel.create(data)
        response.send(Solicitation)
    }
}

module.exports = SolicitationController
