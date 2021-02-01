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

        let intentName = request.queryResult.intent.displayName;

        if (intentName == "venda.salgados"){
            return response.send({"fulfillmentText": "Primeiro Webhook"})
        }
        else if ( intentName == "venda.doces.simples"){
            return response.send({"fulfillmentText": "Doces simples"})
        }

       
    }

    async store ({request, response}){
        const data=request.all()
        const Solicitation = await SolicitationModel.create(data)
        response.send(Solicitation)
    }
}

module.exports = SolicitationController
