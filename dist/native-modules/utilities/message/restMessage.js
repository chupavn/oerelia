import { messageType } from './enums/messageTypes';
import { Message } from './message';
var RestMessage = (function () {
    function RestMessage(config) {
        var _this = this;
        this.restSuccess = true;
        this.customErrorFailed = false;
        this.restSuccess = String(config.result.code).startsWith('2');
        if (config.customErrors) {
            config.customErrors.forEach(function (message) {
                if (message.condition) {
                    _this.customErrorFailed = true;
                    _this.customError(message.error);
                }
            });
            if (this.customErrorFailed) {
                return;
            }
        }
        if (this.restSuccess && !this.customErrorFailed) {
            this.success(config.success);
        }
        else {
            this.error(config.result.response);
        }
    }
    RestMessage.display = function (config) {
        return new RestMessage(config);
    };
    RestMessage.prototype.show = function (type, config) {
        return config ? Message[type](config) : undefined;
    };
    RestMessage.prototype.success = function (config) {
        return this.show(messageType.success, config);
    };
    RestMessage.prototype.error = function (config) {
        var message = { title: config.message, message: '' };
        if (config.errors.length > 1) {
            config.errors.forEach(function (error) {
                message.message += "<li>" + error + "</li>";
            });
            message.message = "<ul>" + message.message + "</ul>";
        }
        else {
            message.message = config.errors[0];
        }
        return this.show(messageType.error, message);
    };
    RestMessage.prototype.customError = function (config) {
        return this.show(messageType.error, config);
    };
    return RestMessage;
}());
export { RestMessage };

//# sourceMappingURL=restMessage.js.map
