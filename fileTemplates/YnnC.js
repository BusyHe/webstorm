#set($ACTIONS = $Actions.split(" "))
#set(${ACTION} = "")
/**
 * File: ${NAME}
 * Created by ${USER} on ${DATE}.
 * Email: busyhe@qq.com
 * Description: ${DESCRIPTION}
 */
module.exports = class extends require('ynn').Controller {
#foreach(${ACTION} in $ACTIONS)
    async ${ACTION}Action() {
        const ctx = this.ctx;
        return ctx.success()
    }
#end 
}