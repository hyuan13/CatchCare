class MyaccountController < ApplicationController
    #before_action :authenticate_user!

    def index
        puts current_user.inspect
    end
end
