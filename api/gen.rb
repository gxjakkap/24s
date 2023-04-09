# frozen_string_literal: true

require 'json'
require 'math24'

Handler = proc do |request, response|
    if request.request_method != 'GET'
        response.status = 405
        response['Content-Type'] = 'application/json; charset=utf-8'
        response.body = {
            'status': 405,
            'msg': 'Method not allowed'
        }
    else
        prb = Math24.generate_problem
        response.status = 200
        response['Content-Type'] = 'application/json; charset=utf-8'
        response.body = {
            'status': 200,
            'problem': prb
        }
    end
end
