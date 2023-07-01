export class Vector {
    constructor(x, y) {
        this.x = x || 0
        this.y = y || 0
    }

    set(target) {
        if (typeof target == "object") {
            this.x = target.x
            this.y = target.y
        } else {
            this.x = target
            this.y = target
        }
    }

    is_equal_to(target) {
        return ((this.x == target.x) && (this.y == target.y))
    }

    create_duplicate(target) {
        return new Vector(target.x, target.y)
    }

    multiply(multiplier) {
        if (typeof multiplier === "object") {
            return new Vector(this.x * multiplier.x, this.y * multiplier.y)
        } else {
            return new Vector(this.x * multiplier, this.y * multiplier)
        }
    }

    division(divisor) {
        if (typeof divisor === "object") {
            return new Vector(this.x / divisor.x, this.y / divisor.y)
        } else {
            return new Vector(this.x / divisor, this.y /divisor)
        }
    }

    addition(addend) {
        if (typeof addend === "object") {
            return new Vector(this.x + addend.x, this.y + addend.y)
        } else {
            return new Vector(this.x + addend. this.y + addend)
        }
    }

    subtraction(subtrahend) {
        if (typeof subtrahend === "object") {
            return new Vector(this.x - subtrahend.x, this.y - subtrahend.y)
        } else {
            return new Vector(this.x - subtrahend, this.y - subtrahend)
        }
    }

    dot(target) {
        return (this.x * target.x + this.y * target.y)
    }

    length_square() {
        return this.dot(this)
    }

    length() {
        return Math.sqrt(this.dot(this))
    }

    normalize() {
        return  this.division(this.length())
    }

}


if (typeof Math.sign == "undefined") {
    Math.sign = function (x) {
        return x === 0 ? 0 : x > 0 ? 1 : -1;
    };
}