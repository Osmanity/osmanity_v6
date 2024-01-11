"use client";

import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function OsmanityAvatar(props) {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,

    wireframe: false,
  });

  const group = useRef();
  const { nodes, materials } = useGLTF("models/OsmanityAvatar.glb");

  const { animations: GangnamStyle } = useFBX("animations/GangnamStyle.fbx");
  const { animations: standingAnimation } = useFBX(
    "animations/StandingIdle.fbx",
  );
  const { animations: acknowledgingAnimation } = useFBX(
    "animations/OS_ani/Acknowledging.fbx",
  );
  const { animations: agreeingAnimation } = useFBX(
    "animations/OS_ani/Agreeing.fbx",
  );
  const { animations: angryAnimation } = useFBX("animations/OS_ani/Angry.fbx");
  const { animations: breathingIdleAnimation } = useFBX(
    "animations/OS_ani/BreathingIdle.fbx",
  );
  const { animations: cockyHeadTurnAnimation } = useFBX(
    "animations/OS_ani/CockyHeadTurn.fbx",
  );
  const { animations: handsForwardGestureAnimation } = useFBX(
    "animations/OS_ani/HandsForwardGesture.fbx",
  );
  const { animations: headNodYesAnimation } = useFBX(
    "animations/OS_ani/HeadNodYes.fbx",
  );
  const { animations: laughingAnimation } = useFBX(
    "animations/OS_ani/Laughing.fbx",
  );
  const { animations: lengthyHeadNodAnimation } = useFBX(
    "animations/OS_ani/LengthyHeadNod.fbx",
  );
  const { animations: lookAroundAnimation } = useFBX(
    "animations/OS_ani/LookAround.fbx",
  );
  const { animations: lookAround2Animation } = useFBX(
    "animations/OS_ani/LookAround_2.fbx",
  );

  const { animations: quickFormalBowAnimation } = useFBX(
    "animations/OS_ani/QuickFormalBow.fbx",
  );
  const { animations: standardIdleAnimation } = useFBX(
    "animations/OS_ani/StandardIdle.fbx",
  );
  const { animations: talkingAnimation } = useFBX(
    "animations/OS_ani/Talking.fbx",
  );
  const { animations: talking2Animation } = useFBX(
    "animations/OS_ani/Talking_2.fbx",
  );
  const { animations: thoughtfulHeadShakeAnimation } = useFBX(
    "animations/OS_ani/ThoughtfulHeadShake.fbx",
  );
  const { animations: wavingAnimation } = useFBX(
    "animations/OS_ani/Waving.fbx",
  );

  GangnamStyle[0].name = "Gangnam Style";
  standingAnimation[0].name = "Standing";
  // fallingAnimation[0].name = "Falling";

  acknowledgingAnimation[0].name = "Acknowledging";
  agreeingAnimation[0].name = "Agreeing";
  angryAnimation[0].name = "Angry";
  breathingIdleAnimation[0].name = "Breathing Idle";
  cockyHeadTurnAnimation[0].name = "Cocky Head Turn";
  handsForwardGestureAnimation[0].name = "Hands Forward Gesture";
  headNodYesAnimation[0].name = "Head Nod Yes";
  laughingAnimation[0].name = "Laughing";
  lengthyHeadNodAnimation[0].name = "Lengthy Head Nod";
  lookAroundAnimation[0].name = "Look Around";
  lookAround2Animation[0].name = "Look Around 2";

  quickFormalBowAnimation[0].name = "Quick Formal Bow";
  standardIdleAnimation[0].name = "Standard Idle";
  talkingAnimation[0].name = "Talking";
  talking2Animation[0].name = "Talking 2";
  thoughtfulHeadShakeAnimation[0].name = "Thoughtful Head Shake";
  wavingAnimation[0].name = "Waving";

  // const { actions } = useAnimations([standingAnimation[0]], group);

  const { actions } = useAnimations(
    [
      GangnamStyle[0],
      acknowledgingAnimation[0],
      agreeingAnimation[0],
      angryAnimation[0],
      breathingIdleAnimation[0],
      cockyHeadTurnAnimation[0],
      handsForwardGestureAnimation[0],
      headNodYesAnimation[0],
      laughingAnimation[0],
      lengthyHeadNodAnimation[0],
      lookAroundAnimation[0],
      lookAround2Animation[0],
      quickFormalBowAnimation[0],
      standardIdleAnimation[0],
      talkingAnimation[0],
      talking2Animation[0],
      thoughtfulHeadShakeAnimation[0],
      wavingAnimation[0],
    ],
    group,
  );

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Head").lookAt(target);
      group.current.getObjectByName("EyeLeft").lookAt(target);
      group.current.getObjectByName("EyeRight").lookAt(target);
    }
  });

  // useEffect(() => {
  //   actions["Agreeing"].reset().fadeIn(0.5).play();
  // }, []);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animation]?.reset().fadeOut(0.5);
    };
  }, [animation]);

  // useEffect(() => {
  //   // Stop all current animations
  //   Object.values(actions).forEach((action) => {
  //     action.fadeOut(0.5);
  //   });

  //   // Wait for the fade-out to complete before starting the new animation
  //   const timeoutId = setTimeout(() => {
  //     if (actions[animation]) {
  //       actions[animation].reset().fadeIn(0.5).play();
  //     }
  //   }, 500); // The delay should match the fadeOut duration

  //   return () => {
  //     clearTimeout(timeoutId);
  //     if (actions[animation]) {
  //       actions[animation].fadeOut(0.5);
  //     }
  //   };
  // }, [animation, actions]);

  // useEffect(() => {
  //   Object.values(materials).forEach((material) => {
  //     material.wireframe = wireframe;
  //   });
  // }, [wireframe]);
  return (
    <group {...props} ref={group} dispose={null}>
      {/* If you use this version "three": "0.146.0", delete this below group to correct the avatar roation  */}
      <group rotation-x={-Math.PI / 2}>
        <group>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/OsmanityAvatar.glb");
