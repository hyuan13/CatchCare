class Api::UsersController < ApplicationController
    before_action :authenticate_user
    #skip_before_action :verify_authenticity_token

    def current
        render json: current_user.as_json(only: %i(id email))
    end

    def signup
        @user = User.new(user_params)
		if @user.save
			render json: @user
		else
			render json: @user.errors
		end
    end

    private
        def user_params
            params.require(:user).permit(:name, :email, :password)
        end
end
