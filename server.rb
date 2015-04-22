require 'sinatra'

get '/' do 
	File.new('public/hello.html').readlines
end