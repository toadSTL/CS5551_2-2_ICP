package com.example.rohithkumar.cameramapsapplication;

import android.*;
import android.content.Context;
import android.content.pm.PackageManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.FragmentActivity;
import android.os.Bundle;
import android.location.Geocoder;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;

import java.util.List;
import java.util.Locale;

public class MyMapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    //public Geocoder geocoder;
    private FusedLocationProviderClient mFusedLocationClient;
    Location currLoc;

    private static final int REQUEST_LOCATION_PERMISSION = 1;
    //private final static String KEY_LOCATION = "location";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_maps);

        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map);
        if(mapFragment != null){
            mapFragment.getMapAsync(this);
        }else{
            Toast.makeText(this,"Error: map fragment was null!", Toast.LENGTH_LONG).show();
        }

        mFusedLocationClient = LocationServices.getFusedLocationProviderClient(this);
        //geocoder = new Geocoder(this, Locale.getDefault());
    }


    private void getLocation() {
        if (ActivityCompat.checkSelfPermission(this,
                android.Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]
                            {android.Manifest.permission.ACCESS_FINE_LOCATION},
                    REQUEST_LOCATION_PERMISSION);
        } else {
            mFusedLocationClient.getLastLocation().addOnSuccessListener(
                    new OnSuccessListener<Location>() {
                        @Override
                        public void onSuccess(Location location) {
                            if (location != null) {
                                updateLocation(location);
                            } else {
                                System.out.println("Error: location was null");
                            }
                        }
                    }).addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.d("MapDemoActivity", "Error trying to get last GPS location");
                        e.printStackTrace();
                    }
                });

        }
    }

    public void updateLocation(Location location){
        if (location == null) {
            //System.out.println("Error Location is null!");
            return;
        }
        // Report to the UI that the location was updated
        LatLng userLoc = new LatLng(location.getLatitude(), location.getLongitude());
        currLoc = location;
        String str = "Your Location: " +
                Double.toString(location.getLatitude()) + "," +
                Double.toString(location.getLongitude());
        Toast.makeText(this, str, Toast.LENGTH_LONG).show();
        //System.out.println("Lat, Long:\t"+ userLoc.latitude + ", " + userLoc.longitude);
        mMap.addMarker(new MarkerOptions().position(userLoc).title("You Are Here!")).showInfoWindow();
        mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(userLoc, 15.0f));
    }




    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
        public void onMapReady (GoogleMap googleMap){
            mMap = googleMap;
            if (mMap != null) {
                // Map is ready
                Toast.makeText(this, "Map Fragment loaded!", Toast.LENGTH_SHORT).show();
                getLocation();
            } else {
                Toast.makeText(this, "Error: map was null!", Toast.LENGTH_SHORT).show();
            }

        // Add a marker in Sydney, Australia,
            // and move the map's camera to the same location.
            //LatLng sydney = new LatLng(-33.852, 151.211);
            //googleMap.addMarker(new MarkerOptions().position(sydney)
            //        .title("Marker in Sydney"));
            //googleMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));

        }
    }
