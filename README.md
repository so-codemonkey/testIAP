# testIAP
Chrome extension to test in-app-purchases

## purpose
This code can be used to demonstrate the Google PURCHASE_CANCELED bug described in http://stackoverflow.com/questions/37667802/chrome-extension-in-app-purchase-always-returns-purchase-canceled-even-if-the-p

## use
To use this, you'll need to:
 0. clone this repo.
 1. create a 128x128 icon file, name it icon_128.png, and add it to these files
 2. zip the test code folder
 3. on your Chrome developer dashboard, create a new product
 4. upload the zip file to the product's edit page
 5. set up a sku in your product's in-app purchases tab, and name it sku1.
 6. add a 440x220 png and use it as the product's promotional tile
 7. *publish the extension to your testers only.* Theoretically testers don't actually get their CCs charged
 when they test IAP.

The buy.js script comes from here: https://github.com/GoogleChrome/chrome-app-samples/blob/master/samples/managed-in-app-payments/scripts/buy.js

## gotchas
I have found that my testers can't find the extension URL to install if they are not only signed into their Chrome browser, but also signed into their gmail account. I thought the Chrome browser identity management was completely different from the gmail identity management, so ... I dunno. 

If you have weird problems getting this to work, doublecheck your Chrome developer dashboard pricing configuration. If you mean to have the extension free with a paid in app purchase, make sure the "pricing and payments" section is marked free, then go to the in-apps products tab at the top and add your in-app sku and set the pricing there.

I haven't found a way to test out IAP with a locally installed extension, presumably because that has a completely different id. You will get an uninformative error message. Ask me how I know. :)

Google: why isn't there a cancel button in the purchase dialog? I know you can just close the window, but wouldn't it be nice to have a cancel button anyway?
