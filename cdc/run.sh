echo "runing cdc ..."

#  mysql
MYSQL_HOST='127.0.0.1'
MYSQL_PORT=9906
MYSQL_USER='root'
MYSQL_PASSWORD='pwd'

./maxwell-1.20.0/bin/maxwell --user=$MYSQL_USER --password=$MYSQL_PASSWORD --host=$MYSQL_HOST --port=$MYSQL_PORT --filter='exclude: *.*,include: cdc.Skill, include: cdc.Skill1' --producer=stdout  | node ./producer/src/index.js