# Các tạo một ứng dụng react native
* Run commands
```
react-native init AwesomeProject --version X.XX.X
```
* Ref
    * https://facebook.github.io/react-native/docs/getting-started.html

# Structure best practices
```
src
    styles: chứa các files styles chung
	assets
		fronts:
		icons: incons của app
		images: hình ảnh của app
	components: chứa các components để chia sẻ với các components khác
        views: chưa các màn hình của ứng dụng, có 2 file: styles và components
        modules: chứa các file như utils của ứng dụng và các modules dùng chung
	config: chứa config của ứng dụng
 	services: chứa các file tương tác với api
	i18n: chứa config về mutiple language
	reducers: thứ mục chứa reducers
```