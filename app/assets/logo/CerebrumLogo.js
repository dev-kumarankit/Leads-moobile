import * as React from "react";
import Svg, { Path, Rect, Defs, Pattern, Use, Image } from "react-native-svg";

export default function CerebrumLogo(props) {
  return (
    <Svg
      key="cerebrum"
      width={props.width}
      height={props.height}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <Rect width="140" height="140" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_16_5" transform="scale(0.00666667)" />
        </Pattern>
        <Image
          id="image0_16_5"
          width="150"
          height="150"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAsVBMVEUAAADHMFjLMFjNMFrNMlrRMlvPMlvPMlrPMVvPMVvPMVvPMlzPMltgYGDPMFDKMFXMMFnNMlvPMlrPMFjPMlzPM1zPMFrPM1vPMlzPMlvPMVzPMlrPMFrPMlzPMFzPMlrPMVvPMGDPMlvLMFzQMlvPMlrQMlrPMlvPM1vPMFjNMlrPMFnNMlnPMlrOMVnOMVrNMlzNMlrNMlzPMFvNMFvPMFxgYGBgYGDPMlthYWH////dTYaaAAAAOHRSTlMAIEBggI+fr7/P3+/foBAwUHB/IK9vMF9/j++QYIBAYKAQcECfgK/vz0CQUHCfoB+AYJBwcFAQIJZuKTUAAAABYktHRDpOCcT6AAAAB3RJTUUH5gYDBCQIaQbJOQAAA4tJREFUeNrt3G1T2zAMB/DQpsZJu4ySkpWmFLqnbuyRDbbs+3+x9W7H4LirbEl/27yw3sJdfyfJqeM0KoocOXII4mg0HpcTc2yruq6nw6OYPf3XF38OB4rTvByXpqqHwxGb1ZzMjylPAlYznniI4rJGk8qTFI81mkwZpjis0SnTFIN1Ytmm4KxGkKjgLDEqKEuOCsgazeSoYKx2oUGFYp0p6heM1RglKgirU3VVKNYrbQGDsJYAFJ51DlGhWfpmD8FCqbAsUAXBrCVMhWSd4VRAVgdU4Vit6Nq+qqwx5X305j7OUSzulqFelOuucS0iLYvVWHW/9gdpWK2/qbromCQ5y7eEq34jMElZl56oC27tdCyvVahAyVhLH1WvQIlYPpesWthTCpZHsq5UqRKxtu5kvVaiJCznMlwpCyhjuZK1klw+1aw3MVR81lsHC6Jis1zfhvpuF7EcDd9jVGyWJVU1SMVlOWrYJmLRNXyHUnFZ5DqsYcnisshr6RimYrLIuzBYv7NZl5GSxWS9J1S7bTLWB4JlgCoea0vV8GMyFrV7QDY8kzUnWNfpWNexashjWYIFVfFYm/XB+JSQFS8yK7MyK7MyK7MyK7MyK7MyK7MyK7PErN3he/3PCVnEqduXhKyvh1kzwWejWCVxYvMtHYs6aMY2F4tFPfGx6VjUUhyQ599MFnUcCK0ij0UdnkKryGNtCBb0UJfHIp8XINPF/E60kdLFZH2PlC4mi2wuYLq4Gxvy8esMdu3issgqDufcj0ex6CrCysjenZJrcdiBHu6zWXM6XaD2YrO2O9pVQVz8Wwy66UEuPsv5w+EK0F+CG7Irl2umd0l+d+piDTv13kty++pM1zAYZcIkrHbnds1uorOci1EPE7G2fm+XK2Cyo5GNF2sPOxX2mPDE5oena783vJHIhCzPMv6LypxwadLzrc5jNT6OqZ3MR0fBWcVPHuteV1lrjJmUpXkcsNePOO3lsTRwLMeGMBlryxlEEY9VtJzlGI+Fc4FfyUW50C8wg/oL/xY65DoR4J39i+fJKjp9gwWZB9F67KITsIpirUxYqFkjyoSFm8yi6rCQc2wUlQw79UcMCz0jSQgLP1FqI2n+GPO3Wn7KIk0r6654sniz3bpb+xxZ+2jues99T/S5gc2mXLhtScYZ7m23PYlLw/qvu1uX/cLaun5OrKfK9iGe/u3X78MRmJUjR/EXthOqC4Ik6Y4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMDNUMDQ6MzY6MDcrMDA6MDAHOlLNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTAzVDA0OjM2OjA3KzAwOjAwdmfqcQAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}
