# frozen_string_literal: true

require 'json'

Handler = proc do |request, response|
    if request.request_method != 'GET'
        response.status = 405
        response['Content-Type'] = 'application/json; charset=utf-8'
        response.body = {
            'status': 405,
            'msg': 'Method not allowed'
        }
    else
        response.status = 200
        response['Content-Type'] = 'application/json; charset=utf-8'
        response.body = {
            'status': 200,
            'msg': 'Hello, world.'
        }
    end
end
