class NewsfeedController < ApplicationController

  def newsfeed
    @posts = Post.all
  end

end 