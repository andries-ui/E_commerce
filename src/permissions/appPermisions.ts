import { Platform } from "react-native";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";

const LOCATION_PERMISSIONS = {
  android_BAACKGROUNDLOCATION: PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
android_COARSELOCATION:PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
android_FINELOCATION:PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
}

const REQUEST_PERMISION_TYPE = {
    location: LOCATION_PERMISSIONS
}

const PERMISSION_TYPE = {
    location: 'location'
}

class AppPermission {
  checkPermission = async (type:any): Promise<boolean> => {
    const permisions = REQUEST_PERMISION_TYPE[type][Platform.OS]
    if (!permisions) {
      return true;
    }

    try {
      const results = await check(permisions);
      if (results === RESULTS.GRANTED) {
        return true;
      }
      return  this.requestPermission(permisions)
    } catch (err) {
      return false;
    }
  };

    requestPermission = async (permissions:any): Promise<boolean> =>
    {
        try
        {
            const result = await request(permissions)
            return result === RESULTS.GRANTED
        } catch (err)
        {
            return false
      }
  }
}

const Permission = new AppPermission()
export{Permission, PERMISSION_TYPE}
