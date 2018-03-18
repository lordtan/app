package org.apache.cordova.whitelist;

import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * 测试js调用java类
 */
public class JSTest extends CordovaPlugin {

    public void speak(String content){
        Log.e("jsTest",content);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if("speak".equals(action)){
            //speechSynthesize
            String content = args.getString(0);
            speak(content);
            callbackContext.success("调用后台成功");//如果不调用success回调，则js中successCallback不会执行
            return true;
        }
        return false;
    }
}
