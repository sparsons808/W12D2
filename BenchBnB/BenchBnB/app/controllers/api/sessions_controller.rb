class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            rend json: ['wrong password of username'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        logout!
        flash[:success] = ['Logged out']
    end

end