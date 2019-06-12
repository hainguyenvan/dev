# SVN CMD
* Clone repository
```
$ svn checkout URL
or
$ svn co URL
```

* Kiểm tra trạng thái file
```
$ svn status
```

* Show commit
```
$ svn log
```

* Hiển thị nội dung thay đổi của file
```
$ svn diff
```

* Cập nhật repository ở local
```
$ svn update
```

* Push code
```
$ svn add FILE_NAME
$ svn commit -m "message ..."
```

* Revert file
```
$ svn revert FILE_NAME
```

* Revert folders
```
$ svn revert -R FOLDER_NAME
```

* Back contents file
    * Ref: https://www.tutorialspoint.com/svn/svn_fix_mistakes.htm
```
$ svn up # lấy revison
$ svn merge -r 22:21 array.c
```

* Add mutiple files
```
$ svn add path/to/dir/*
```