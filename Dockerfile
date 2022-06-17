FROM golang:1.18.3-alpine3.16
RUN mkdir /app
ADD ./frontend/build /app/frontend
ADD ./backend /app/backend
WORKDIR /app/backend
RUN go build -o main .
CMD ["/app/main"]
