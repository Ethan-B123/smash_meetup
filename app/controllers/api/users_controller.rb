class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params[:user] = JSON.parse(params[:user])
    params.require(:user).permit(:email, :password, :fb_user_id, :google_user_id)
  end
end
