class PlanetsController < ApplicationController
  def index
    @planets = Planet.all

    render json: @planets, status: :accepted
  end

  def show
    @planet = Planet.find(params[:id])

    render json: @planet, status: :accepted, include: :people
  end
end
